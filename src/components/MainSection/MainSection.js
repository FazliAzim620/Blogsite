import React from 'react';
import {Grid,Typography,Divider} from '@material-ui/core'
import { posts } from '../Data/Data';
import Markdown from 'markdown-to-jsx';

function MainSection(props) {
    return (
        <Grid item xs={12} md={9}>
          <Typography variant="h6" gutterBottom>
            {props.title}
          </Typography>
          <Divider />
          {posts.map((post) => (
            <Markdown key={post.body}>{post.body}</Markdown>
          ))}
        </Grid>
      );
}

export default MainSection;
