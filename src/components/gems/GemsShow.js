import React from 'react'
import axios from 'axios'

import Map from './GemsMap'
import Comments from '../common/Comments'
import Auth from '../../lib/Auth'

import {Link} from 'react-router-dom'

class GemsShow extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {}
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    // this.handleCommentDelete = this.handleCommentDelete.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)

  }

  handleDelete(){
    axios
      .delete(`/api/gems/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        this.props.history.push('/gems')
      })
      .catch(err => console.log(err))

  }

  handleCommentChange(e) {
    const data = {...this.state.data, content: e.target.value }
    const error = null
    this.setState({ data, error })
  }


  handleCommentSubmit(e){
    e.preventDefault()
    axios
      .post(`/api/gems/${this.state.gem._id}/comments/`,
        this.state.data,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        console.log(res.data)
        this.setState({...this.state, gem: res.data  })
      })
      .then(() => this.props.history.push(`/gems/${this.state.gem._id}`))
      .catch(() => this.setState({ error: 'An error occured' }))
  }


  // handleCommentDelete(e){
  //   console.log(e.target.value)
  //   e.preventDefault()
  //   axios
  //     .delete(`/api/gems/${this.props._id}/comments/${e.target.value}`,
  //       {headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //       })
  //     .then(() => this.props.history.push(`/${this.props.show}/${this.props._id}`))
  //     .catch(() => this.setState({ error: 'An error occured' }))
  // }


  componentDidMount() {
    axios.get(`/api/gems/${this.props.match.params.id}`)
      .then(res => this.setState({ gem: res.data }))
  }

  render(){
    console.log(this.state)
    if(!this.state.gem) return null
    const { _id, name, image, category, description, user, location } = this.state.gem
    // const {comments} = this.state.comments
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <h4 className="title is-4">Added by: {user.username} </h4>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Category: {category}</h4>
                <h4 className="title is-4">Description:</h4>
                <p> {description}</p>

                <hr />
                {Auth.canEdit(user._id) && (
                  <div>
                    <Link to={`/gems/${_id}/edit`} className="button is-dark" >Edit </Link>
                    <hr />
                    <button className="button is-dark" onClick={this.handleDelete}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="columns">
            <div className="column">
              <Comments
                handleCommentSubmit={this.handleCommentSubmit}
                handleCommentChange={this.handleCommentChange}
                handleCommentDelete={this.handleCommentDelete}
                {...this.state.gem}
                contentInput= {this.state.data.content}
              />
            </div>
            <div className="column">
              <div className="content">
                <h2 className="title is-4"> Location</h2>
                <Map
                  location ={location}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default GemsShow
