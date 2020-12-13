/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookmark = /* GraphQL */ `
  mutation CreateBookmark(
    $input: CreateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    createBookmark(input: $input, condition: $condition) {
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
export const updateBookmark = /* GraphQL */ `
  mutation UpdateBookmark(
    $input: UpdateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    updateBookmark(input: $input, condition: $condition) {
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
export const deleteBookmark = /* GraphQL */ `
  mutation DeleteBookmark(
    $input: DeleteBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    deleteBookmark(input: $input, condition: $condition) {
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
export const createCategoryXBookmark = /* GraphQL */ `
  mutation CreateCategoryXBookmark(
    $input: CreateCategoryXBookmarkInput!
    $condition: ModelCategoryXBookmarkConditionInput
  ) {
    createCategoryXBookmark(input: $input, condition: $condition) {
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
export const updateCategoryXBookmark = /* GraphQL */ `
  mutation UpdateCategoryXBookmark(
    $input: UpdateCategoryXBookmarkInput!
    $condition: ModelCategoryXBookmarkConditionInput
  ) {
    updateCategoryXBookmark(input: $input, condition: $condition) {
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
export const deleteCategoryXBookmark = /* GraphQL */ `
  mutation DeleteCategoryXBookmark(
    $input: DeleteCategoryXBookmarkInput!
    $condition: ModelCategoryXBookmarkConditionInput
  ) {
    deleteCategoryXBookmark(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createListXBookmark = /* GraphQL */ `
  mutation CreateListXBookmark(
    $input: CreateListXBookmarkInput!
    $condition: ModelListXBookmarkConditionInput
  ) {
    createListXBookmark(input: $input, condition: $condition) {
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
export const updateListXBookmark = /* GraphQL */ `
  mutation UpdateListXBookmark(
    $input: UpdateListXBookmarkInput!
    $condition: ModelListXBookmarkConditionInput
  ) {
    updateListXBookmark(input: $input, condition: $condition) {
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
export const deleteListXBookmark = /* GraphQL */ `
  mutation DeleteListXBookmark(
    $input: DeleteListXBookmarkInput!
    $condition: ModelListXBookmarkConditionInput
  ) {
    deleteListXBookmark(input: $input, condition: $condition) {
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
