import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/me/post')({
  component: () => <div>Hello /dashboard/me/post!</div>
})