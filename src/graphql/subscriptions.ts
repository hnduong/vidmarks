/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark {
    onCreateBookmark {
      id
      name
      offset
      url
      categories {
        items {
          id
          bookmarkId
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark {
    onUpdateBookmark {
      id
      name
      offset
      url
      categories {
        items {
          id
          bookmarkId
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark {
    onDeleteBookmark {
      id
      name
      offset
      url
      categories {
        items {
          id
          bookmarkId
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategoryXBookmark = /* GraphQL */ `
  subscription OnCreateCategoryXBookmark {
    onCreateCategoryXBookmark {
      id
      bookmarkId
      categoryId
      bookmark {
        id
        name
        offset
        url
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        name
        userId
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategoryXBookmark = /* GraphQL */ `
  subscription OnUpdateCategoryXBookmark {
    onUpdateCategoryXBookmark {
      id
      bookmarkId
      categoryId
      bookmark {
        id
        name
        offset
        url
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        name
        userId
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategoryXBookmark = /* GraphQL */ `
  subscription OnDeleteCategoryXBookmark {
    onDeleteCategoryXBookmark {
      id
      bookmarkId
      categoryId
      bookmark {
        id
        name
        offset
        url
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        name
        userId
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      bookmarks {
        items {
          id
          bookmarkId
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      bookmarks {
        items {
          id
          bookmarkId
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      bookmarks {
        items {
          id
          bookmarkId
          categoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateListXBookmark = /* GraphQL */ `
  subscription OnCreateListXBookmark {
    onCreateListXBookmark {
      id
      bookmarkId
      listId
      bookmark {
        id
        name
        offset
        url
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      list {
        id
        name
        userId
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateListXBookmark = /* GraphQL */ `
  subscription OnUpdateListXBookmark {
    onUpdateListXBookmark {
      id
      bookmarkId
      listId
      bookmark {
        id
        name
        offset
        url
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      list {
        id
        name
        userId
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteListXBookmark = /* GraphQL */ `
  subscription OnDeleteListXBookmark {
    onDeleteListXBookmark {
      id
      bookmarkId
      listId
      bookmark {
        id
        name
        offset
        url
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      list {
        id
        name
        userId
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
      id
      name
      userId
      bookmarks {
        items {
          id
          bookmarkId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
      id
      name
      userId
      bookmarks {
        items {
          id
          bookmarkId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
      id
      name
      userId
      bookmarks {
        items {
          id
          bookmarkId
          listId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
