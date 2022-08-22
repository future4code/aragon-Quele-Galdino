import {PostBusiness} from "../../src/business/PostBusiness"
import { ICreatePostInputDTO } from "../../src/models/Post"
import { PostDatabaseMock } from "../mocks/postDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("testando PostBusiness", () => {
    const postBusiness = new PostBusiness(new PostDatabaseMock(),
     new IdGeneratorMock(),
      new HashManagerMock(),
      new AuthenticatorMock()
      )

      test("post criado com sucesso", async () => {
        const input: ICreatePostInputDTO = {
token: "token-astrodev", content: "olá!"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toEqual("post criado com sucesso")
        expect(response.post.getId()).toEqual("id-mock")
        expect(response.post.getContent()).toEqual("olá!")
        expect(response.post.getUserId()).toEqual("101")
      })
})      