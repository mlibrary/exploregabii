import React, { Component, useState } from "react"
import styled from "styled-components"
import ImageMapper from 'react-image-mapper';

const AreaTag = styled.span`
  position: absolute;
  color: #fff;
  padding: 10px;
  background: rgba(0,0,0,0.8);
  transform: translate3d(-50%, -50%, 0);
  border-radius: 5px;
  pointer-events: none;
  z-index: 1000;
`

export class MapNavigation extends Component{
  constructor(props) {
    super(props);
  }

  state = {
    areaCoords: null
  };
  
  componentDidMount() {
    if(this.mapper && this.mapper.computeCenter) {
      const areaCoords = this.props.map.areas.reduce((accum, area) => {
        accum[area.name] = this.mapper.computeCenter(area);
        return accum;
      }, {});
      this.setState({ areaCoords });
    }
  }

  render() {
    const { imageSrc, map } = this.props;

    return (
      <div style={{ position: 'absolute' }}>
        <ImageMapper 
          ref={mapper => this.mapper = mapper}
          src={imageSrc} 
          map={map}
          key="mapper" />
        {
          this.mapper && 
          this.state.areaCoords &&
          map.areas.map(area => {
            const coords = this.state.areaCoords[area.name];
            return (
              <AreaTag key={area.name} style={{ top: `${coords[1]}px`, left: `${coords[0]}px` }}>{area.name}</AreaTag>
            );
          })
        }
      </div>
    )
  }
}