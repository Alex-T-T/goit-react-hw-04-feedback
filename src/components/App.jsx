import FeedbackCounter from "./Feedback/Feedback";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <FeedbackCounter/>
    </div>
  );
};
