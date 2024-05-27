import { createFileRoute } from '@tanstack/react-router';
import { Layout } from '../../ui/src';

export const Route = createFileRoute('/dashboard')({
  component: () => <Layout />,
});
