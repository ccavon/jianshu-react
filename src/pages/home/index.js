
/**
 * @template 首页 - 导航栏下面中间部分
 */

import React from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from "./style";
import { actionCreators } from './store';

class Home extends React.Component {

  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    return (
      <HomeWrapper>

        {/* 左边内容 */}
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic />
          <List />
        </HomeLeft>

        {/* 右边内容 */}
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>

      </HomeWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData: () => {
    dispatch(actionCreators.getHomeInfo());
  }
});

export default connect(null, mapDispatchToProps)(Home);