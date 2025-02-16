import { useEffect, useState } from "react";

// Comments Component
const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Load comments from localStorage or API
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${articleId}`)) || [];
    setComments(savedComments);
  }, [articleId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      date: new Date().toISOString(),
      user: "Anonymous", // Replace with actual user if authenticated
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${articleId}`,
      JSON.stringify(updatedComments)
    );
    setNewComment("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Comments ({comments.length})
      </h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border rounded-lg mb-2"
          rows="3"
          aria-label="Comment input"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">{comment.user}</span>
              <time className="text-sm text-gray-500">
                {new Date(comment.date).toLocaleDateString()}
              </time>
            </div>
            <p className="text-gray-800">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CommentSection;
