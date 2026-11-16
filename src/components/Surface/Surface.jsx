import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { getRectWithoutBorder } from '../../javascript/utilities.js'

export default class Surface extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      surface: { top: 0, left: 0, width: 0, height: 0 },
      thumb: { top: 0, left: 0, width: 0, height: 0 }
    }

    this.surface = React.createRef()
    this.thumb = React.createRef()
  }

  componentDidMount() {
    console.log(
      'Surface componentDidMount',
      getRectWithoutBorder(this.surface.current)
    )

    const surfaceBoudingBox = getRectWithoutBorder(this.surface.current)
    const thumbBoundingBox = getRectWithoutBorder(this.thumb.current)

    console.log('surfaceBoudingBox', surfaceBoudingBox)

    this.setState({
      surface: {
        top: surfaceBoudingBox.top,
        left: surfaceBoudingBox.left,
        width: surfaceBoudingBox.width,
        height: surfaceBoudingBox.height
      },
      thumb: {
        top: thumbBoundingBox.top,
        left: thumbBoundingBox.left,
        width: thumbBoundingBox.width,
        height: thumbBoundingBox.height
      }
    })
  }

  handleSurfaceActive = () => {
    const { options, handleSurfaceActive } = this.props
    handleSurfaceActive(options.name)
  }

  handleSurfaceValueChange = (e) => {
    const { options, handleSurfaceValueChange } = this.props
    const { name, active, position } = options
    const { surface, thumb } = this.state

    if (active) {
      const width = surface.width - thumb.width
      const height = surface.height - thumb.height

      const thumbLeft = Math.round(
        (e.clientX - surface.left - thumb.width / 2) / (width / 100)
      )

      const thumbBottom = Math.round(
        (surface.top + height - e.clientY + thumb.height / 2) / (height / 100)
      )

      if (thumbLeft >= 0 && thumbLeft <= 100) {
        position[0] = thumbLeft
      }

      if (thumbBottom >= 0 && thumbBottom <= 100) {
        position[1] = thumbBottom
      }

      handleSurfaceValueChange(name, position)
    }
  }

  render() {
    const { options } = this.props
    const { active, position } = options
    const { surface, thumb } = this.state

    const width = surface.width - thumb.width
    const height = surface.height - thumb.height

    const thumbLeft = Math.round((width / 100) * position[0])
    const thumbBottom = Math.round((height / 100) * position[1])

    const classes = classnames({
      Surface: true,
      active: active
    })

    const styles = {
      left: thumbLeft + 'px',
      bottom: thumbBottom + 'px'
    }

    return (
      <div
        className={classes}
        ref={this.surface}
        onMouseMove={this.handleSurfaceValueChange}
      >
        <div
          className="thumb"
          style={styles}
          ref={this.thumb}
          onMouseDown={this.handleSurfaceActive}
        />
      </div>
    )
  }
}
