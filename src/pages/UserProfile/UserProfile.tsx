import './_UserProfile.scss';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useNavigate } from 'react-router-dom';
import { IPost, IUser } from '../../interfaces';

export const UserProfile = () => {
  const user: IUser = {
    _id: '123456789',
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    password: 'segura1234',
    photo_url:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  };
  const isOwnProfile = true;

  const myPosts: IPost[] = [
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post My First Post My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://www.ui1.es/sites/default/files/blog/images/ecologia_y_ecologismo_de_la_mano_retocada.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post My First Post My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://www.ui1.es/sites/default/files/blog/images/ecologia_y_ecologismo_de_la_mano_retocada.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post My First Post My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://www.ui1.es/sites/default/files/blog/images/ecologia_y_ecologismo_de_la_mano_retocada.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post My First Post My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://www.ui1.es/sites/default/files/blog/images/ecologia_y_ecologismo_de_la_mano_retocada.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post My First Post My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://www.ui1.es/sites/default/files/blog/images/ecologia_y_ecologismo_de_la_mano_retocada.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
    {
      _id: 'post1',
      user_id: 'user1',
      title: 'My First Post',
      description: 'This is the description of my first post.',
      photos_url: [
        'https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg',
      ],
      labels: ['first', 'post'],
      district: 'District 1',
      likes: 10,
      createdAt: '2023-07-10T12:00:00.000Z',
      updatedAt: '2023-07-10T12:00:00.000Z',
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div className='userProfile'>
        <div className='userProfile__addPost'>Añadir publicación</div>
        <div className='userProfile__backBtn'>
          <ArrowBackIcon
            className='userProfile__backBtn-icon'
            onClick={() => navigate(-1)}
          />
        </div>
        {isOwnProfile ? (
          <>
            <div
              className='userProfile__editBtn'
              onClick={() => {
                navigate('/edit-profile');
              }}
            >
              <EditIcon className='userProfile__editBtn-icon' />
            </div>
          </>
        ) : (
          <></>
        )}

        <div className='userProfile__container'>
          <div className='userProfile__container-grid'>
            <div className='userProfile__container-grid-left'>
              <Avatar
                className='userProfile__container-grid-left-image'
                alt={user?.name}
                src={user?.photo_url}
              />
              <h3 className='userProfile__container-grid-left-name'>
                {user?.name}
              </h3>
            </div>
            <div className='userProfile__container-grid-right'>
              <h2 className='userProfile__container-grid-right-label'>Posts</h2>
              <h2 className='userProfile__container-grid-right-counter'>
                {myPosts?.length}
              </h2>
            </div>
          </div>
        </div>
        <div className='userProfile__postsTab'>
          <div className='userProfile__postsTab-posts'>
            <ImageList gap={15} cols={5}>
              {myPosts ? (
                myPosts?.map((item) => (
                  <ImageListItem
                    key={item._id}
                    onClick={() => navigate(`/post/`)}
                  >
                    <div className='userProfile__postsTab-posts-title'>
                      {item.title}
                    </div>
                    <img
                      className='userProfile__postsTab-posts-img'
                      src={item.photos_url[0]}
                      alt={item.title}
                    />
                    <div className='userProfile__postsTab-posts-likes'>
                      <ThumbUpIcon /> {item.likes}
                    </div>
                  </ImageListItem>
                ))
              ) : (
                <p>No se realizaron posts</p>
              )}
            </ImageList>
          </div>
        </div>
      </div>
    </>
  );
};
