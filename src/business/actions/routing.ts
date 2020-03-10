import { t } from './';

export function route(path) {
  return ({ 
    type: t.ROUTE,
    payload: path
  });
}
