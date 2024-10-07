import React, { useState } from 'react';

// Import your thumbs-up icons
import likeIcon from '@/assets/about/like.png'; // Unfilled thumb
import likedIcon from '@/assets/about/liked.png'; // Filled (colored) thumb

const Feedback: React.FC = () => {
  // State for the feedback section
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState<{ text: string; likes: number; liked: boolean }[]>([]);

  // Handle Comment Submission
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, { text: comment, likes: 0, liked: false }]);
      setComment(''); // Clear input after submission
    }
  };

  // Handle Like for Each Comment
  const handleCommentLike = (index: number) => {
    const newComments = [...commentsList];
    // Toggle like status
    if (newComments[index].liked) {
      newComments[index].likes -= 1; // Decrease like count if already liked
    } else {
      newComments[index].likes += 1; // Increase like count if not liked
    }
    newComments[index].liked = !newComments[index].liked; // Toggle like status
    setCommentsList(newComments);
  };

  return (
    <div className="bg-slate-200 p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">
        Your Feedback
      </h3>

      {/* Comment Input Section */}
      <div className="mb-4">
        <textarea
          className="w-full border border-gray-300 p-3 rounded-md"
          rows={4}
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={handleCommentSubmit}
        >
          Submit Comment
        </button>
      </div>

      {/* Display Comments */}
      {commentsList.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-3 flex justify-between items-center">
            Comments:
            <span className="text-gray-400 text-sm">{commentsList.length}</span>
          </h4>
          <ul className="space-y-4">
            {commentsList.map((commentItem, index) => (
              <li key={index} className="flex flex-col border-b border-gray-200 pb-4">
                <span>{commentItem.text}</span>
                <div className="flex justify-between items-center mt-2">
                  <button 
                    onClick={() => handleCommentLike(index)}
                    className="p-2"
                  >
                    <img 
                      src={commentItem.liked ? likedIcon : likeIcon} 
                      alt="Like" 
                      className="h-5 w-5 transition-colors duration-300" 
                    />
                  </button>
                  <span className="text-gray-400 text-sm">{commentItem.likes} Likes</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Feedback;
