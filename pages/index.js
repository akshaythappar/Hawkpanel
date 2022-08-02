import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Map from './components/Map';
import Link from 'next/link';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
// import Footer from './Footer';


export default function Home() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push('/login');
      }
    })
  }, []);

  return (
    <Wrapper>
      <Map />
      
      <ActionItems >
        <Header>

          <UberLogo src='https://hawkaerospace.in/assets/img/img/icons/Hawk1.png' />

          <Profile>

            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />

          </Profile>

        </Header>
        <ActionButtons>

          <Link href='/search' >
            <ActionButton>
              <ActionButtonImage src='https://icon-library.com/images/inspect-icon/inspect-icon-12.jpg' />
              Inspection
            </ActionButton>
          </Link>
          <Link href='/search' >
          <ActionButton>
            <ActionButtonImage src='http://cdn.onlinewebfonts.com/svg/img_313683.png' />
            Surveillance
          </ActionButton>
          </Link>

          <Link href='/search' >
          <ActionButton>
            <ActionButtonImage src='https://icon-library.com/images/agriculture-icon/agriculture-icon-1.jpg' />
            Agriculture
          </ActionButton>
          </Link>

          
        </ActionButtons>

        <InputButton>

        </InputButton>

      </ActionItems>
      
      {/* <Foote/> */}

    </Wrapper>
  )
};

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px object-cover cursor-pointer
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex flex-col flex-1 bg-green-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`