import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('todo list tests', () => {
test('find heading', () => {
  render(<App/>);
  const header = screen.getByText(/to-do list/i)
  expect(header).toBeInTheDocument()
});

test('how many buttons pre 1 click', async () => {
  render(<App/>)
  const oneButton = await screen.findAllByRole('button');
  expect(oneButton).toHaveLength(1);
})

test('how many buttons after 1 todo', async () => {
  render(<App/>)
  const adding = screen.getByText(/add Todo/i)
  fireEvent.click(adding)
  const twoButton = await screen.findAllByRole('button');
  expect(twoButton).toHaveLength(2)
})

test('delete button to appear after an added todo', async () => {
  render(<App/>)
  const adding = screen.getByText(/add todo/i)
  fireEvent.click(adding)
  const deleter = await screen.getByText(/delete/i);
  expect(deleter).toBeInTheDocument()
})

test('check box to appear after an added todo', async () => {
  render(<App/>)
  const adding = screen.getByText(/ADD TODO/i)
  fireEvent.click(adding)
  const checker = await screen.getAllByRole('checkbox')
  expect(checker).toHaveLength(1)
})
});
