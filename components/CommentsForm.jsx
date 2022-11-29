import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    ;(nameEl.current.value = window.localStorage.getItem('name')),
      (emailEl.current.value = window.localStorage.getItem('email'))
  }, [])

  const handleCommentSubmition = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)

      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className="bg-white shadow-lg p-8 pb-12 mb-8 rounded">
      <h3 className="text-xl nb-8 font-semibold  pb-4">Leave a Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          className="bg-gray-100 p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
          ref={commentEl}
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <input
          className="bg-gray-100 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
          type="text"
          ref={nameEl}
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-gray-100 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
          type="email"
          ref={emailEl}
          placeholder="Email"
          name="email"
        />
      </div>
      <div className=" grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="ml-2 text-gray-500 cursor-pointer"
            htmlFor="storeData"
          >
            Save for next time
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500"> All fields are required.</p>
      )}
      <div className=" mt-8">
        <button
          type="button"
          onClick={handleCommentSubmition}
          className=" justify-center transition duration-500 ease hover:bg-teal-600 inlide-block bg-teal-500 text-lg rounded text-white px-4 py-3 cursor-pointer"
        >
          Post comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-teal-500">
            {' '}
            Comment submited for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
