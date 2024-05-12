'use client';

import { usePosts } from '@/services/api/posts';
import { Box, Typography } from '@mui/material';
import React, { Fragment } from 'react';

export default function DetailsPage() {
  const { data: posts, isLoading } = usePosts();

  if (isLoading) return <Typography variant="h1">Loading....</Typography>;

  return (
    <div>
      {posts?.map((p) => (
        <Box marginBlock="2rem" key={p.id}>
          <Typography variant="h2">title: {p.title}</Typography>
          <Typography variant="subtitle1" mt="0.5rem">
            body: {p.body}
          </Typography>
        </Box>
      ))}
    </div>
  );
}
