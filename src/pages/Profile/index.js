import { useParams } from 'react-router-dom';
import { ChangePassForm, UpdateInfoForm } from '~/components/reuse/Profile';

function Profile() {
   const { type } = useParams();
   // DEFINE PAGE PROFILE
   let PageProfile;

   switch (type) {
      case 'changepass':
         PageProfile = ChangePassForm;
         break;
      case 'updateinfo':
         PageProfile = UpdateInfoForm;
         break;
      default:
         // TODO CREATE EMPTY PROFILE IF TYPE PARAM IS NOT VALID
         break;
   }

   return <PageProfile />;
}

export default Profile;
