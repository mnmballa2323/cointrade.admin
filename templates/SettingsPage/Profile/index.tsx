import { useState } from 'react';
import Field from '@/components/Field';
import Icon from '@/components/Icon';
import Details from '../Details';

type ProfileProps = {};

const Profile = ({}: ProfileProps) => {
  // Example: fetched from user data
  const [email, setEmail] = useState('user@example.com');
  const [editingEmail, setEditingEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Details title="SETTINGS">
      <div className="space-y-6">

        {/* Email Section */}
        <div className="flex items-center space-x-4">
          <Field
            className="flex-1"
            label="Email"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={!editingEmail}
          />
          {/* {!editingEmail && (
            <button
              className="p-2"
              type="button"
              onClick={() => setEditingEmail(true)}
              // aria-label="Edit Email"
            >
              <Icon name="edit" className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
            </button>
          )} */}
          {editingEmail && (
            <button
              className="btn-secondary"
              type="button"
              onClick={() => setEditingEmail(false)}
            >
              Save
            </button>
          )}
        </div>

        {/* Password Section */}
        <Field
          label="New Password"
          placeholder="Enter new password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Field
          label="Confirm Password"
          placeholder="Confirm new password"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />

        <button className="btn-secondary mt-6 md:w-full">Save</button>
      </div>
    </Details>
  );
};

export default Profile;