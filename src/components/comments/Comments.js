'use client';
import { useState } from 'react';
import Image from 'next/image';
import './Comments.css';
import BrandonKelley from '../../images/brandon-kelley.png'; // Placeholder image

const Comments = ({ comments, postId }) => {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId, name, website, content }),
      });

      const result = await response.json();
      console.log('Comments.js', result);
      if (response.ok) {
        setSuccess('Comment added successfully!');
        setName('');
        setWebsite('');
        setContent('');
        // Optionally, you could refresh comments here
      } else {
        setError(result.error || 'Failed to add comment');
      }
    } catch (error) {
      setError('Failed to add comment');
    }
  };

  if (!comments || comments.length === 0) {
    return '';
  }

  return (
    <section className='wpa-wrapper-sides-spacing'>
      <div className='wpa-comments-main wpa-h3-font-size'>
        <div className="wpa-right-menu-buttons wpa-content-end wpa-leave-btn">
          <button>LEAVE A REPLY</button>
        </div>
        {comments.map(comment => (
          <div key={comment.id} className='wpa-comments-common'>
            <div className='wpa-comments-wrapper'>
              <div className='wpa-flex wpa-gap-70 wpa-content-top-bottom-spacing-30 wpa-user-comments'>
                <div className='wpa-comments-common-icon wpa-border'>
                  <Image src={BrandonKelley} alt={comment.author.node.name} />
                </div>
                <div className='wpa-comments-common-content wpa-h5-font-size wpa-paragraph-text'>
                  <div className='wpa-flex wpa-space-between'>
                    <h5>{comment.author.node.name}</h5>
                    <h6>{new Date(comment.date).toLocaleDateString()}</h6>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: comment.content }} />
                  <div className='wpa-button-reply'><button type='button'>Reply</button></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='wpa-comment-form wpa-h3-font-size'>
        <h3>Leave a Comment</h3>
        <form onSubmit={handleSubmit}>
          <div className='wpa-form-inner'>
            <div className='wpa-form-group wpa-flex wpa-menu-items-gap'>
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='wpa-input-padding-20'
                required
              />
              <input
                type='text'
                placeholder='Website'
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className='wpa-input-padding-20'
              />
            </div>
            <div className='wpa-form-group wpa-flex wpa-content-top-bottom-spacing-30 wpa-menu-items-gap'>
              <textarea
                placeholder='Message'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='wpa-input-padding-20'
                required
              />
            </div>
          </div>
          <div className="wp-view-more-btn btn-primary-hover wpa-btn-left wpa-font-weight-500 wpa-comments-btn wpa-conversation-btn">
            <button type="submit">START CONVERSATION</button>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </section>
  );
};

export default Comments;
