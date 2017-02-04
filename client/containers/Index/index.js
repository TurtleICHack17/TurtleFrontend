import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as LoginActions from '../../actions/login'
import style from './style.css'
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';
import Alert from '../../components/Alert'

class Index extends Component {
  render() {
    const { actions, children, login } = this.props

    return (
      <div className={style.indexPage}>
        <div>
          <div className={style.logo}></div>
        </div>
        <Header className={style.intro}>Let's do this!</Header>

          <FacebookLogin
            appId="1272020392851220"
            autoLoad={false}
            fields="name,email,picture,gender"
            callback={(response) => actions.facebookOnResponse(response)} />

          {login.failed ?
            <div className={style.loginInfo}>Could not log in automatically</div>: null
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
