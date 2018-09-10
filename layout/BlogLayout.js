import React from 'react'
import Head from '../components/Head'
import BlogNav from '../components/BlogNav'
import BlogData from '../components/BlogData'
import ToTop from '../components/ToTop'

class BlogPage extends React.Component {
  state = {
    isFixed: false,
    isDisplayToTop: false,
  }
  
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }
  componentDidMount() {
    const height = this.nav.current.clientHeight + 10;
    const windowHeight = document.body.clientHeight + 100;
    window.addEventListener('scroll', e => {
      const nowHeight = window.pageYOffset;

      if(nowHeight >= height) {
        this.setState({
          isFixed: true,
        })
      } else {
        this.setState({
          isFixed: false,
        })
      }

      if(nowHeight >= windowHeight) {
        this.setState({
          isDisplayToTop: true
        })
      } else {
        this.setState({
          isDisplayToTop: false,
        })
      }
    })
  }
  render() {
    const { isFixed, isDisplayToTop } = this.state;
    const { children } = this.props;
    return (
      <div className="wraper">
        <Head title='博客主页' />
        <div className="left">
          <div className="nav" ref={this.nav}>
            <BlogNav></BlogNav>
          </div>
          <div className={!isFixed ? 'data' : 'data dataNow'}>
            <BlogData></BlogData>
          </div>
        </div>
        <div className="content right">
          {children}
        </div>
        <div className="toTap">
          <ToTop isDisplay={isDisplayToTop} />
        </div>
        <style jsx>{`
          .wraper {
            width: 1340px;
            margin: 0 auto;
          }
          .left {
            float: left;
          }
          .data.dataNow {
            top: 0;
            position: fixed;
          }
          .nav{
            margin-bottom: 10px;
          }
          .right {
            float: right;
          }
          .content {
            width: 1100px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 30px;
          }
        `}</style>
        <style global jsx>{`
          body {
            background: #f5f7f9;
          }
        `}</style>
      </div>
    )
  }
}

export default BlogPage;