import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { Users, USERS } from '../src/users/components';

const mocks = [];

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Users />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');
});