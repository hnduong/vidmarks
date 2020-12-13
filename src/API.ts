/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookmarkInput = {
  id?: string | null,
  name: string,
  offset: number,
  url: string,
};

export type ModelBookmarkConditionInput = {
  name?: ModelStringInput | null,
  offset?: ModelIntInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelBookmarkConditionInput | null > | null,
  or?: Array< ModelBookmarkConditionInput | null > | null,
  not?: ModelBookmarkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBookmarkInput = {
  id: string,
  name?: string | null,
  offset?: number | null,
  url?: string | null,
};

export type DeleteBookmarkInput = {
  id?: string | null,
};

export type CreateCategoryXBookmarkInput = {
  id?: string | null,
  bookmarkId: string,
  categoryId: string,
};

export type ModelCategoryXBookmarkConditionInput = {
  bookmarkId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  and?: Array< ModelCategoryXBookmarkConditionInput | null > | null,
  or?: Array< ModelCategoryXBookmarkConditionInput | null > | null,
  not?: ModelCategoryXBookmarkConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCategoryXBookmarkInput = {
  id: string,
  bookmarkId?: string | null,
  categoryId?: string | null,
};

export type DeleteCategoryXBookmarkInput = {
  id?: string | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type CreateListXBookmarkInput = {
  id?: string | null,
  bookmarkId: string,
  listId: string,
};

export type ModelListXBookmarkConditionInput = {
  bookmarkId?: ModelIDInput | null,
  listId?: ModelIDInput | null,
  and?: Array< ModelListXBookmarkConditionInput | null > | null,
  or?: Array< ModelListXBookmarkConditionInput | null > | null,
  not?: ModelListXBookmarkConditionInput | null,
};

export type UpdateListXBookmarkInput = {
  id: string,
  bookmarkId?: string | null,
  listId?: string | null,
};

export type DeleteListXBookmarkInput = {
  id?: string | null,
};

export type CreateListInput = {
  id?: string | null,
  name: string,
  userId?: string | null,
};

export type ModelListConditionInput = {
  name?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelListConditionInput | null > | null,
  or?: Array< ModelListConditionInput | null > | null,
  not?: ModelListConditionInput | null,
};

export type UpdateListInput = {
  id: string,
  name?: string | null,
  userId?: string | null,
};

export type DeleteListInput = {
  id?: string | null,
};

export type ModelBookmarkFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  offset?: ModelIntInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelBookmarkFilterInput | null > | null,
  or?: Array< ModelBookmarkFilterInput | null > | null,
  not?: ModelBookmarkFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelListFilterInput | null > | null,
  or?: Array< ModelListFilterInput | null > | null,
  not?: ModelListFilterInput | null,
};

export type CreateBookmarkMutationVariables = {
  input: CreateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type CreateBookmarkMutation = {
  createBookmark:  {
    __typename: "Bookmark",
    id: string,
    name: string,
    offset: number,
    url: string,
    categories:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookmarkMutationVariables = {
  input: UpdateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type UpdateBookmarkMutation = {
  updateBookmark:  {
    __typename: "Bookmark",
    id: string,
    name: string,
    offset: number,
    url: string,
    categories:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookmarkMutationVariables = {
  input: DeleteBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type DeleteBookmarkMutation = {
  deleteBookmark:  {
    __typename: "Bookmark",
    id: string,
    name: string,
    offset: number,
    url: string,
    categories:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryXBookmarkMutationVariables = {
  input: CreateCategoryXBookmarkInput,
  condition?: ModelCategoryXBookmarkConditionInput | null,
};

export type CreateCategoryXBookmarkMutation = {
  createCategoryXBookmark:  {
    __typename: "CategoryXBookmark",
    id: string,
    bookmarkId: string,
    categoryId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryXBookmarkMutationVariables = {
  input: UpdateCategoryXBookmarkInput,
  condition?: ModelCategoryXBookmarkConditionInput | null,
};

export type UpdateCategoryXBookmarkMutation = {
  updateCategoryXBookmark:  {
    __typename: "CategoryXBookmark",
    id: string,
    bookmarkId: string,
    categoryId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryXBookmarkMutationVariables = {
  input: DeleteCategoryXBookmarkInput,
  condition?: ModelCategoryXBookmarkConditionInput | null,
};

export type DeleteCategoryXBookmarkMutation = {
  deleteCategoryXBookmark:  {
    __typename: "CategoryXBookmark",
    id: string,
    bookmarkId: string,
    categoryId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    bookmarks:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    bookmarks:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    bookmarks:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateListXBookmarkMutationVariables = {
  input: CreateListXBookmarkInput,
  condition?: ModelListXBookmarkConditionInput | null,
};

export type CreateListXBookmarkMutation = {
  createListXBookmark:  {
    __typename: "ListXBookmark",
    id: string,
    bookmarkId: string,
    listId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    list:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListXBookmarkMutationVariables = {
  input: UpdateListXBookmarkInput,
  condition?: ModelListXBookmarkConditionInput | null,
};

export type UpdateListXBookmarkMutation = {
  updateListXBookmark:  {
    __typename: "ListXBookmark",
    id: string,
    bookmarkId: string,
    listId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    list:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListXBookmarkMutationVariables = {
  input: DeleteListXBookmarkInput,
  condition?: ModelListXBookmarkConditionInput | null,
};

export type DeleteListXBookmarkMutation = {
  deleteListXBookmark:  {
    __typename: "ListXBookmark",
    id: string,
    bookmarkId: string,
    listId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    list:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateListMutationVariables = {
  input: CreateListInput,
  condition?: ModelListConditionInput | null,
};

export type CreateListMutation = {
  createList:  {
    __typename: "List",
    id: string,
    name: string,
    userId: string | null,
    bookmarks:  {
      __typename: "ModelListXBookmarkConnection",
      items:  Array< {
        __typename: "ListXBookmark",
        id: string,
        bookmarkId: string,
        listId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListMutationVariables = {
  input: UpdateListInput,
  condition?: ModelListConditionInput | null,
};

export type UpdateListMutation = {
  updateList:  {
    __typename: "List",
    id: string,
    name: string,
    userId: string | null,
    bookmarks:  {
      __typename: "ModelListXBookmarkConnection",
      items:  Array< {
        __typename: "ListXBookmark",
        id: string,
        bookmarkId: string,
        listId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListMutationVariables = {
  input: DeleteListInput,
  condition?: ModelListConditionInput | null,
};

export type DeleteListMutation = {
  deleteList:  {
    __typename: "List",
    id: string,
    name: string,
    userId: string | null,
    bookmarks:  {
      __typename: "ModelListXBookmarkConnection",
      items:  Array< {
        __typename: "ListXBookmark",
        id: string,
        bookmarkId: string,
        listId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookmarkQueryVariables = {
  id: string,
};

export type GetBookmarkQuery = {
  getBookmark:  {
    __typename: "Bookmark",
    id: string,
    name: string,
    offset: number,
    url: string,
    categories:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookmarksQueryVariables = {
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarksQuery = {
  listBookmarks:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    bookmarks:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      bookmarks:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetListQueryVariables = {
  id: string,
};

export type GetListQuery = {
  getList:  {
    __typename: "List",
    id: string,
    name: string,
    userId: string | null,
    bookmarks:  {
      __typename: "ModelListXBookmarkConnection",
      items:  Array< {
        __typename: "ListXBookmark",
        id: string,
        bookmarkId: string,
        listId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListsQuery = {
  listLists:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBookmarkSubscription = {
  onCreateBookmark:  {
    __typename: "Bookmark",
    id: string,
    name: string,
    offset: number,
    url: string,
    categories:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookmarkSubscription = {
  onUpdateBookmark:  {
    __typename: "Bookmark",
    id: string,
    name: string,
    offset: number,
    url: string,
    categories:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookmarkSubscription = {
  onDeleteBookmark:  {
    __typename: "Bookmark",
    id: string,
    name: string,
    offset: number,
    url: string,
    categories:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategoryXBookmarkSubscription = {
  onCreateCategoryXBookmark:  {
    __typename: "CategoryXBookmark",
    id: string,
    bookmarkId: string,
    categoryId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategoryXBookmarkSubscription = {
  onUpdateCategoryXBookmark:  {
    __typename: "CategoryXBookmark",
    id: string,
    bookmarkId: string,
    categoryId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategoryXBookmarkSubscription = {
  onDeleteCategoryXBookmark:  {
    __typename: "CategoryXBookmark",
    id: string,
    bookmarkId: string,
    categoryId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    bookmarks:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    bookmarks:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    bookmarks:  {
      __typename: "ModelCategoryXBookmarkConnection",
      items:  Array< {
        __typename: "CategoryXBookmark",
        id: string,
        bookmarkId: string,
        categoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateListXBookmarkSubscription = {
  onCreateListXBookmark:  {
    __typename: "ListXBookmark",
    id: string,
    bookmarkId: string,
    listId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    list:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListXBookmarkSubscription = {
  onUpdateListXBookmark:  {
    __typename: "ListXBookmark",
    id: string,
    bookmarkId: string,
    listId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    list:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListXBookmarkSubscription = {
  onDeleteListXBookmark:  {
    __typename: "ListXBookmark",
    id: string,
    bookmarkId: string,
    listId: string,
    bookmark:  {
      __typename: "Bookmark",
      id: string,
      name: string,
      offset: number,
      url: string,
      categories:  {
        __typename: "ModelCategoryXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    list:  {
      __typename: "List",
      id: string,
      name: string,
      userId: string | null,
      bookmarks:  {
        __typename: "ModelListXBookmarkConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateListSubscription = {
  onCreateList:  {
    __typename: "List",
    id: string,
    name: string,
    userId: string | null,
    bookmarks:  {
      __typename: "ModelListXBookmarkConnection",
      items:  Array< {
        __typename: "ListXBookmark",
        id: string,
        bookmarkId: string,
        listId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListSubscription = {
  onUpdateList:  {
    __typename: "List",
    id: string,
    name: string,
    userId: string | null,
    bookmarks:  {
      __typename: "ModelListXBookmarkConnection",
      items:  Array< {
        __typename: "ListXBookmark",
        id: string,
        bookmarkId: string,
        listId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListSubscription = {
  onDeleteList:  {
    __typename: "List",
    id: string,
    name: string,
    userId: string | null,
    bookmarks:  {
      __typename: "ModelListXBookmarkConnection",
      items:  Array< {
        __typename: "ListXBookmark",
        id: string,
        bookmarkId: string,
        listId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
