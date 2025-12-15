import { TheoryTopic } from '@/types/theory';

export const fastapiTheory: TheoryTopic = {
  topicId: 'fastapi',
  topicName: 'FastAPI',
  category: 'Full Stack',
  description: 'FastAPI modern Python web framework focused on high performance and automatic docs via OpenAPI.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Routing',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is FastAPI?', content: 'A Python web framework built on Starlette (ASGI) and Pydantic. Provides high performance, type hints-first design, automatic OpenAPI docs, and async support.' },
        { id: 'q2', title: 'Creating first endpoint?', content: 'from fastapi import FastAPI; app = FastAPI(); @app.get("/") def read_root(): return {"hello": "world"}. Run with uvicorn main:app --reload.' },
        { id: 'q3', title: 'Path vs query parameters?', content: 'Path params in route: /items/{id} captured as function args. Query params are optional and parsed from ?key=value automatically with type conversion.' },
        { id: 'q4', title: 'HTTP methods?', content: 'Supports get, post, put, patch, delete, options, head via decorators @app.get("/"), etc. Multiple methods can be declared with @app.api_route.' },
        { id: 'q5', title: 'Response models?', content: 'Use response_model to shape output with Pydantic models. Ensures validation/serialization and filters extra fields. Example: @app.get("/users", response_model=List[User]).' },
        { id: 'q6', title: 'Status codes?', content: 'Return status_code in decorator or Response(status_code=201). from fastapi import status for constants. Error responses via HTTPException.' },
        { id: 'q7', title: 'Automatic docs?', content: 'FastAPI generates OpenAPI schema. Interactive docs at /docs (Swagger UI) and /redoc (ReDoc). Models and parameters appear automatically.' },
        { id: 'q8', title: 'Path parameter validation?', content: 'Use type hints and Path(...) for constraints: id: int = Path(..., ge=1). Query params with Query(..., max_length=50). FastAPI returns 422 on validation errors.' },
        { id: 'q9', title: 'Request body validation?', content: 'Define Pydantic models; FastAPI parses JSON body into model instance, validates types and constraints. Supports nested models and lists.' },
        { id: 'q10', title: 'Enum parameters?', content: 'Use Python Enum: class ModelName(str, Enum): ...; declare param: model: ModelName. Docs show allowed values; invalid values produce 422.' }
      ]
    },
    {
      id: 'models',
      title: 'Pydantic Models and Validation',
      content: '',
      subsections: [
        { id: 'q11', title: 'Pydantic BaseModel?', content: 'Data validation/serialization using type hints. class User(BaseModel): id: int; name: str. Provides dict(), json(), validators, default values.' },
        { id: 'q12', title: 'Validators?', content: 'Use @validator for field-level checks or root_validator for cross-field. In Pydantic v2 use field_validator/model_validator. Raise ValueError for invalid data.' },
        { id: 'q13', title: 'Aliases and casing?', content: 'Use Field(alias="user_id") to map JSON keys. Configure model_config for populate_by_name, alias_generator (e.g., camelCase). Dict/json can by default use aliases.' },
        { id: 'q14', title: 'Optional fields?', content: 'Use Optional[T] or T | None with default None. Required field uses ... or no default. FastAPI generates proper docs for nullable fields.' },
        { id: 'q15', title: 'ORM mode?', content: 'Config orm_mode=True (Pydantic v1) or from_attributes=True (v2) to allow reading data from ORM objects with attribute access instead of dict.' },
        { id: 'q16', title: 'Response filtering?', content: 'response_model removes extra fields not in model. Use response_model_exclude_unset/exclude to control serialization. Good for hiding sensitive fields.' },
        { id: 'q17', title: 'Custom data types?', content: 'Use constr, conint, EmailStr, AnyUrl, UUID, datetime types for strict validation. Can define custom types with regex or subclassing.' },
        { id: 'q18', title: 'Settings management?', content: 'Use Pydantic BaseSettings (v1) or Settings (v2) to read env vars with validation. Great for configuration management with type safety.' },
        { id: 'q19', title: 'Version differences?', content: 'FastAPI supports Pydantic v1 and v2. Some APIs renamed: validator->field_validator, orm_mode->from_attributes. Check FastAPI version compatibility.' },
        { id: 'q20', title: 'Schema customization?', content: 'Use model_config (v2) or Config (v1) for json_schema_extra, title, description. FastAPI uses these in OpenAPI docs.' }
      ]
    },
    {
      id: 'async',
      title: 'Async, Dependencies, and Middleware',
      content: '',
      subsections: [
        { id: 'q21', title: 'Async support?', content: 'FastAPI fully supports async def endpoints on ASGI. Await IO-bound calls. Sync def also allowed; FastAPI runs them in threadpool.' },
        { id: 'q22', title: 'Dependency Injection?', content: 'Use Depends to declare dependencies for auth, DB sessions, common params. Dependencies can be sync/async and can yield for teardown (context managers).' },
        { id: 'q23', title: 'Global dependencies?', content: 'Add dependencies to app = FastAPI(dependencies=[Depends(...)]) or include_router. Apply to all routes in a router or app.' },
        { id: 'q24', title: 'Security dependencies?', content: 'Use OAuth2PasswordBearer, HTTPBasic, APIKeyHeader, etc. Dependencies validate tokens/credentials and inject user info.' },
        { id: 'q25', title: 'Middleware?', content: 'app.middleware("http") to wrap requests for logging, CORS, auth. starlette.middleware for CORS, GZip, TrustedHost, HTTPSRedirect.' },
        { id: 'q26', title: 'Exception handling?', content: 'Raise HTTPException for errors. Custom handlers via app.exception_handler(ExceptionType) returning Response/JSONResponse.' },
        { id: 'q27', title: 'Background tasks?', content: 'Use BackgroundTasks to schedule post-response jobs like sending emails. For heavier work, use Celery/RQ and message brokers.' },
        { id: 'q28', title: 'Lifecycle events?', content: '@app.on_event("startup") and shutdown for init/cleanup (connect DB, load models). In FastAPI 0.100+ use lifespan context.' },
        { id: 'q29', title: 'CORS setup?', content: 'Include CORSMiddleware with allowed origins, methods, headers. Necessary for browser cross-origin API calls.' },
        { id: 'q30', title: 'Routers?', content: 'APIRouter organizes endpoints with prefixes/tags/dependencies. Include via app.include_router(router, prefix="/api").' }
      ]
    },
    {
      id: 'db-auth',
      title: 'DB, Auth, and Testing',
      content: '',
      subsections: [
        { id: 'q31', title: 'Database integration?', content: 'Use SQLModel/SQLAlchemy with session dependency. For async, use SQLAlchemy 2 async engine or databases library. Manage sessions per request via Depends.' },
        { id: 'q32', title: 'Migrations?', content: 'Use Alembic with SQLAlchemy. Manage revisions, upgrade/downgrade. Configure env.py to use FastAPI models metadata.' },
        { id: 'q33', title: 'Authentication?', content: 'Commonly OAuth2 password flow with JWT. Use OAuth2PasswordBearer dependency to extract token, verify, and return current user. Hash passwords with bcrypt.' },
        { id: 'q34', title: 'Password hashing?', content: 'Use passlib[bcrypt] or bcrypt. Store only salted hash. Verify on login. Keep pepper/rounds sensible for security.' },
        { id: 'q35', title: 'JWT handling?', content: 'Issue JWT with user id/claims and expiry. Verify signature and expiry in dependency. Use token type (bearer) and proper algorithms (HS256/RS256).' },
        { id: 'q36', title: 'Testing FastAPI?', content: 'Use TestClient from fastapi.testclient (requests-compatible). For async, use httpx.AsyncClient with lifespan manager. Dependency overrides for mocks.' },
        { id: 'q37', title: 'Request validation errors?', content: 'FastAPI returns 422 with details about invalid fields. You can customize error handler or schema with validation_error_logger.' },
        { id: 'q38', title: 'Pagination and filtering?', content: 'Implement via query params limit/offset/page. Reuse dependencies for common params. Libraries like fastapi-pagination provide helpers.' },
        { id: 'q39', title: 'File uploads?', content: 'Use UploadFile and File from fastapi for streaming uploads. Form data parsed automatically. Set max size via server/proxy. Save to disk or cloud.' },
        { id: 'q40', title: 'WebSockets?', content: 'FastAPI supports WebSockets via websocket routes (@app.websocket). Manage connections, accept/send text or bytes. Useful for realtime features.' }
      ]
    },
    {
      id: 'deploy',
      title: 'Performance and Deployment',
      content: '',
      subsections: [
        { id: 'q41', title: 'ASGI servers?', content: 'Use Uvicorn or Hypercorn. Production often with gunicorn -k uvicorn.workers.UvicornWorker. Enable keep-alive, workers based on CPU.' },
        { id: 'q42', title: 'Performance tips?', content: 'Keep endpoints async for IO, reuse DB connections, enable HTTP compression, validate only needed fields, and profile hot paths. Avoid blocking calls.' },
        { id: 'q43', title: 'Caching?', content: 'Use CDN/Reverse proxy for static, Redis for data caching. ETag/Last-Modified headers for client caching. Depends for injecting cache clients.' },
        { id: 'q44', title: 'Settings per environment?', content: 'Use environment variables with Pydantic Settings. Separate dev/stage/prod configs. Avoid committing secrets.' },
        { id: 'q45', title: 'Logging?', content: 'Configure standard logging. Add middleware for request logging. Structure logs (JSON) for observability. Use OpenTelemetry for tracing.' },
        { id: 'q46', title: 'Security best practices?', content: 'Validate input, limit upload size, enable CORS correctly, use HTTPS, set secure cookies, implement rate limits, and keep dependencies updated.' },
        { id: 'q47', title: 'Containerization?', content: 'Use slim Python base, install deps with pip, run uvicorn. Multi-stage builds to keep images small. Set PYTHONDONTWRITEBYTECODE, PYTHONUNBUFFERED.' },
        { id: 'q48', title: 'Reverse proxies?', content: 'Deploy behind Nginx/Traefik for TLS termination, buffering, compression. Set proxy headers (X-Forwarded-For/Proto). Configure timeouts for long requests.' },
        { id: 'q49', title: 'Background workers?', content: 'Offload heavy tasks to Celery/RQ/Arq with Redis/RabbitMQ. Trigger from endpoints; return 202 while task processes.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Mixing sync blocking calls in async handlers, forgetting to close DB sessions, missing dependency overrides in tests, exposing sensitive fields without response_model.' }
      ]
    }
  ]
};
