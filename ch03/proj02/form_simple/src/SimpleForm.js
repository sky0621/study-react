import React from 'react'

export class SimpleForm extends React.Component {
    constructor(props) {
        super(props)
        // 状態初期化
        this.state = { value: '' }
    }

    // 値が変更された時
    doChange(e) {
        const newValue = e.target.value
        this.setState({value: newValue})
    }

    // 送信ボタンが押された時
    doSubmit(e) {
        window.alert('値を送信：'+this.state.value)
        e.preventDefault()
    }

    // 画面の描画
    render() {
        const doChange = (e) => this.doChange(e)
        const doSubmit = (e) => this.doSubmit(e)

        return (
            <form onSubmit={doSubmit}>
                <input type='text'
                  value={this.state.value}
                  onChange={doChange} />
                <input type='submit' value='送信' />
            </form>
        )
    }
}