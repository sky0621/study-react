import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //
  // コンポーネントの生成とマウント
  //
  // オブジェクト生成タイミング
  constructor(props) {
    super(props)
    console.log('オブジェクト生成タイミング（constructor）')
  }

  // コンポーネントがDOMにマウントされる直前
  componentWillMount() {
    console.log('コンポーネントがDOMにマウントされる直前（componentWillMount）')
  }

  // コンポーネントが描画される
  render() {
    console.log('コンポーネントが描画される（render）')

    // オンクリック用
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }

    return (
      <div>
        <button onClick={setStateHandler}>setState</button>
      </div>
    )
  }

  // コンポーネントがDOMにマウントされた直後
  componentDidMount() {
    console.log('コンポーネントがDOMにマウントされた直後（componentDidMount）')
  }

  //
  // コンポーネントの更新
  //
  // コンポーネントのプロパティが変更された時
  componentWillReceiveProps(nextProps) {
    console.log('コンポーネントのプロパティが変更された時（componentWillReceiveProps）')
  }
  
  // コンポーネントの外観を更新してよいか判断する時
  shouldComponentUpdate(nextProps, nextState) {
    console.log('コンポーネントの外観を更新してよいか判断する時（shouldComponentUpdate）')
    return true
  }

  // コンポーネントが更新される直前
  componentWillUpdate() {
    console.log('コンポーネントが更新される直前（componentWillUpdate）')
  }

  // コンポーネントが更新された直後
  componentDidUpdate() {
    console.log('コンポーネントが更新された直後（componentDidUpdate）')
  }

  // 
  // コンポーネントのアンマウント
  //
  componentWillUnmount() {
    console.log('コンポーネントのアンマウント（componentWillUnmount）')
  }

}

export default App;
