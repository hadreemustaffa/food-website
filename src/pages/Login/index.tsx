import { Button } from '../../components/Button';

export const Login = () => {
  return (
    <div className="flex flex-col p-4 gap-6">
      <h1 className="text-4xl font-sans font-bold">Login</h1>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-black-950 p-1"
          />
        </div>
        <div className="flex flex-col gap-1 pb-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-black-950 p-1"
          />
        </div>

        <Button variant="primary" value="Log In" />
      </div>
    </div>
  );
};
