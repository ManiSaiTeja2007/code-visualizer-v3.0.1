# backend/schema.py
from graphene import ObjectType, Schema, List, String, Field, Mutation, Argument

class ExecutionResultType(ObjectType):
    trace = List(String)
    variables = String

class Query(ObjectType):
    user_progress = Field(String)

    def resolve_user_progress(self, info):
        return "User progress stub"

class ExecuteCode(Mutation):
    class Arguments:
        code = Argument(String, required=True)
        lang = Argument(String, required=True)

    Output = ExecutionResultType

    def mutate(self, info, code, lang):
        return execute_code_resolver(None, info, code, lang)

class ExplainCode(Mutation):
    class Arguments:
        code = Argument(String, required=True)

    Output = String

    def mutate(self, info, code):
        return explain_code_resolver(None, info, code)

class LinkGitHub(Mutation):
    class Arguments:
        token = Argument(String, required=True)

    Output = String

    def mutate(self, info, token):
        return link_github_resolver(None, info, token)

class SaveProgress(Mutation):
    class Arguments:
        data = Argument(String, required=True)

    Output = String

    def mutate(self, info, data):
        return save_progress_resolver(None, info, data)

class Mutation(ObjectType):
    execute_code = ExecuteCode.Field()
    explain_code = ExplainCode.Field()
    link_github = LinkGitHub.Field()
    save_progress = SaveProgress.Field()

schema = Schema(query=Query, mutation=Mutation)