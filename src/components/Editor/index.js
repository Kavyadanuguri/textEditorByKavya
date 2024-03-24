import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

class Editor extends Component {
  state = {isBold: false, isFamily: false, isLine: false}

  getBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  getFamily = () => {
    this.setState(prevState => ({isFamily: !prevState.isFamily}))
  }

  getLine = () => {
    this.setState(prevState => ({isLine: !prevState.isLine}))
  }

  render() {
    const {isBold, isFamily, isLine} = this.state
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const boldWeight = isBold ? 'bold' : 'normal'
    const familyColor = isFamily ? '#faff00' : '#f1f5f9'
    const familyType = isFamily ? 'italic' : 'normal'
    const lineColor = isLine ? '#faff00' : '#f1f5f9'
    const lineType = isLine ? 'underline' : 'normal'
    return (
      <div className="bg-container">
        <div className="container1">
          <div className="container2">
            <h1 className="heading1">Text Editor</h1>
            <img
              className="image1"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt=" text editor"
            />
          </div>
          <div className="container3">
            <ul className="container4">
              <li className="li">
                {/* eslint-disable-next-line */}
                <button
                  data-testid="bold"
                  onClick={this.getBold}
                  className="btn1"
                  type="button"
                >
                  <VscBold color={boldColor} size={25} />
                </button>
              </li>
              <li className="li">
                {/* eslint-disable-next-line */}
                <button
                  onClick={this.getFamily}
                  data-testid="italic"
                  className="btn1"
                  type="button"
                >
                  <GoItalic color={familyColor} size={25} />
                </button>
              </li>
              <li className="li">
                {/* eslint-disable-next-line */}
                <button
                  data-testid="underline"
                  onClick={this.getLine}
                  className="btn2"
                  type="button"
                >
                  <AiOutlineUnderline color={lineColor} size={25} />
                </button>
              </li>
            </ul>

            <div className="container5">
              <textarea
                style={{
                  fontWeight: boldWeight,
                  fontStyle: familyType,
                  textDecoration: lineType,
                }}
                className="text-area"
                name="postContent"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Editor
