<template>
  <div>
    {{ hello }}
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data: function() {
    return {
      hello: 'world',
    }
  },
  apollo: {
    hello: gql`
      query {
        hello
      }
    `,
  },
};
</script>