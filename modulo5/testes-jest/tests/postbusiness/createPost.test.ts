import {PostBusiness} from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/postDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("testando PostBusiness", () => {
    const postBusiness = new PostBusiness(new PostDatabaseMock(),
     new IdGeneratorMock(),
      new HashManagerMock(),
      new AuthenticatorMock())
})      