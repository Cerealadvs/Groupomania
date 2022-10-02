import React, { useState, useContext } from 'react'
import { InfoContext } from '../Context/InfoContext'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import colors from '../styles/colors'
import iconDelete from '../assets/delete.png'
import { timestampParser } from '../utils/dateFormat'

const DivComment = styled.div`
  background-color: ${colors.secondary};
  margin: 8px 0;
  padding: 5px;
  border-radius: 5px;
`
const ContainerComments = styled.div`
  display: flex;
  flex-direction: column-reverse;
`
const Form = styled.form`
  width: 100%;
  display: flex;
`
const Input = styled.input`
  flex: 1;
  padding: 5px;
  font-size: 15px;
  border-radius: 5px;
`
const IconDelete = styled.img`
  margin-top: 5px;
  cursor: pointer;
`
const Span = styled.span`
  margin-left: 20px;
  font-size: 0.8em;
`

export default function CardComments(props) {
  const token = Cookies.get('token')
  const userId = localStorage.getItem('userId')
  const { pseudoCtx } = useContext(InfoContext)
  const [text, setText] = useState('')

  function submitForm(e) {
    e.preventDefault()

    const comments = {
      commenterId: userId,
      commenterPseudo: pseudoCtx,
      text: text,
    }

    fetch(`http://localhost:7000/api/post/comment-post/${props.postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(comments),
    })
      .then((res) => res.json())
      .then(() => {
        props.callApiPost(token)
        setText('')
      })
      .catch((err) => console.log(err))
  }

  function deleteComment(commentId) {
    fetch(
      `http://localhost:7000/api/post/delete-comment-post/${props.postId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ commentId: commentId }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        props.callApiPost(token)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Form onSubmit={submitForm}>
        <Input
          type="text"
          value={text}
          placeholder="Votre commentaire puis entrer"
          onChange={(e) => setText(e.target.value)}
          required
        />
      </Form>
      <ContainerComments>
        {props.comments.map((comment, index) => {
          return (
            <DivComment key={index}>
              <h4>
                {comment.commenterPseudo}
                <Span> {timestampParser(comment.timestamp)}</Span>
              </h4>
              <div>{comment.text}</div>

              {comment.commenterId === userId && (
                <IconDelete
                  onClick={() => deleteComment(comment._id)}
                  src={iconDelete}
                  alt="icon delete"
                  height={20}
                  width={20}
                />
              )}
            </DivComment>
          )
        })}
      </ContainerComments>
    </div>
  )
}
