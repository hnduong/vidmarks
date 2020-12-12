<template>
  <amplify-authenticator>
    <div id="app">
      <h1>Todo App</h1>
      <input type="text" v-model="name" placeholder="Name" />
      <input type="number" v-model="offset" placeholder="Offset" />
      <input type="text" v-model="url" placeholder="url" />

      <button v-on:click="createBookmark">Create Bookmark</button>

      <div v-for="item in bookmarks" :key="item.id">
        <h3>{{ item.name }}</h3>
        <p>{{ item.url }}</p>
      </div>
    </div>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>
import { API } from 'aws-amplify';
import { createBookmark } from './graphql/mutations';
import { listBookmarks } from './graphql/queries';
import { onCreateBookmark } from './graphql/subscriptions';

export default {
  name: 'app',
  data() {
    return {
      bookmarks: [],
      url: '',
      name: '',
      offset: 0,
    };
  },
  async created() {
    this.getBookmarks();
    this.subscribe();
  },
  methods: {
    async createBookmark() {
      const { name, offset, url } = this;
      if (!name) return;
      const bookmark = { name, offset, url };
      await API.graphql({
        query: createBookmark,
        variables: { input: bookmark },
      });
      this.name = '';
      this.url = '';
      this.offset = 0;
    },
    async getBookmarks() {
      const bookmarks = await API.graphql({
        query: listBookmarks,
      });
      console.log(bookmarks);
      this.bookmarks = bookmarks.data.listBookmarks.items;
    },
    subscribe() {
      API.graphql({ query: onCreateBookmark }).subscribe({
        next: (eventData) => {
          const bookmark = eventData.value.data.onCreateBookmark;
          if (this.bookmarks.some((item) => item.name === bookmark.name))
            return; // remove duplications
          this.bookmarks = [...this.bookmarks, bookmark];
        },
      });
    },
  },
};
</script>
