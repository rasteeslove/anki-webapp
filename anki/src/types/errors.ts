import { AxiosError } from "axios";

class RefreshTokenExpirationError extends AxiosError { };
class NotFoundError extends AxiosError { };

export { RefreshTokenExpirationError, NotFoundError };
