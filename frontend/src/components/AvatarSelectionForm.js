import React from 'react';
import '../style/AvatarSelectionForm.css'

function AvatarSelectionForm({setAvatarImage}) {
  function handleAvatars(imageSrc) {
    setAvatarImage(imageSrc)
    let avatars = document.querySelectorAll('#avatar-option')
    avatars.forEach((avatar) => {
      if(avatar.src.includes(imageSrc)) {
        avatar.className = 'avatar-choice-active'
      } else {
        avatar.className = 'avatar-choice'
      }
    })
  }
  return(
    <div>
      <div id="avatar-selection">
        <img id='avatar-option' className='avatar-choice' src='https://i.pravatar.cc/150?u=user1' onClick={ () =>
        {
          handleAvatars('https://i.pravatar.cc/150?u=user1')
        }
        }></img>
        <img id='avatar-option' className='avatar-choice' src='https://i.pravatar.cc/150?u=user2' onClick={ () => {
          handleAvatars('https://i.pravatar.cc/150?u=user2')
        }
        }></img>
        <img id='avatar-option' className='avatar-choice' src='https://i.pravatar.cc/150?u=user3' onClick={ () => {
          handleAvatars('https://i.pravatar.cc/150?u=user3')
        }
        }></img>
        <img id='avatar-option' className='avatar-choice' src='https://i.pravatar.cc/150?u=user4' onClick={ () => {
          handleAvatars('https://i.pravatar.cc/150?u=user4')
        }
        }></img>
        <img id='avatar-option' className='avatar-choice' src='https://i.pravatar.cc/150?u=user6' onClick={ () => {
          handleAvatars('https://i.pravatar.cc/150?u=user6')
        }
        }></img>
      </div>
      <p id='select-avatar-p'>Select your avatar (optional)</p>
    </div>
  )
}

export default AvatarSelectionForm