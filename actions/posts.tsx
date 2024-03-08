export async function getPosts() {
  const pathUrl = '/posts';
  const fullUrl = process.env.DASHBOARD_BASE_URL_API + pathUrl;

  const response = await fetch(fullUrl, {
    cache: 'no-store',
  });

  return response.json();
}

export async function deletePost(postId: any) {
  const pathUrl = '/posts/' + postId;
  const fullUrl = process.env.DASHBOARD_BASE_URL_API + pathUrl;

  const response = await fetch(fullUrl, {
    method: 'DELETE',
  });

  return response;
}

export async function savePost(data: any) {
  const method = data._id === 0 ? 'POST' : 'PUT';
  const pathUrl = data._id === 0 ? '/posts' : '/posts/' + data._id;
  const fullUrl = process.env.DASHBOARD_BASE_URL_API + pathUrl;

  delete data['_id'];

  const response = await fetch(fullUrl, {
    method: method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });

  return response;
}
