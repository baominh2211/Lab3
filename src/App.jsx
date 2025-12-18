import UserProfile from './UserProfile';
import Counter from './Counter';
import Login from './Login';
import Card from './Card';
import Accordion from './Accordion';
import TodoApp from './TodoApp';

function App() {
  // Exercise 3 & 4: User data for UserProfile components
  const user1 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const user2 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.imgur.com/MK3eW3As.jpg',
    imageSize: 90,
  };

  return (
    <div className="App">
      <h1>🚀 React Basics Exercise - Lab 3</h1>
      <p style={{ color: '#999', marginBottom: '2rem' }}>
        Complete React exercises with Vite - MSc. Tran Vinh Khiem
      </p>

      {/* Part II: Exercise 3 & 4 - UserProfile with Props */}
      <section>
        <h2 className="section-title">Exercise 3 & 4: User Profiles with Props</h2>
        <Card title="User Profile - Light Theme">
          <UserProfile userData={user1} theme="light" />
        </Card>
        <Card title="User Profile - Dark Theme">
          <UserProfile userData={user2} theme="dark" />
        </Card>
      </section>

      <hr className="section-divider" />

      {/* Part III: Exercise 5 - Counter with State */}
      <section>
        <h2 className="section-title">Exercise 5: Counter Component</h2>
        <Counter />
      </section>

      <hr className="section-divider" />

      {/* Part III: Exercise 6 - Login Form */}
      <section>
        <h2 className="section-title">Exercise 6: Login Form</h2>
        <Login />
      </section>

      <hr className="section-divider" />

      {/* Part IV: Exercise 7 - Accordion with Lifted State */}
      <section>
        <h2 className="section-title">Exercise 7: Accordion Component</h2>
        <Accordion />
      </section>

      <hr className="section-divider" />

      {/* Part VI: Capstone Project - Todo List */}
      <section>
        <h2 className="section-title">Part VI: Capstone Project - Todo List</h2>
        <TodoApp />
      </section>

      <footer style={{ marginTop: '3rem', padding: '2rem', color: '#999', fontSize: '0.9rem' }}>
        <p>Built with React + Vite</p>
        <p>Lab 3: Introduction to React - All Exercises Completed ✅</p>
      </footer>
    </div>
  );
}

export default App;
