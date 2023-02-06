import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateCurrentCheckoutStep } from '~/features/user/userSlice';
import {
   CheckoutStepLogin,
   CheckoutStepShipping,
   CheckoutStepPayment,
   ErrorStep,
} from '~/components/reuse/CheckoutStep';

function CheckoutStep() {
   const carts = useSelector((state) => state.user.userCarts);
   const { step } = useParams();
   const dispatch = useDispatch();
   let StepComponent;
   // Definite step component
   if (carts.length > 0) {
      switch (step) {
         case '@login':
            dispatch(updateCurrentCheckoutStep(step));
            StepComponent = CheckoutStepLogin;
            break;
         case '@shipping':
            dispatch(updateCurrentCheckoutStep(step));
            StepComponent = CheckoutStepShipping;
            break;
         case '@payment':
            dispatch(updateCurrentCheckoutStep(step));
            StepComponent = CheckoutStepPayment;
            break;
         default:
            StepComponent = ErrorStep;
      }
   } else {
      StepComponent = ErrorStep;
   }
   return (
      <div className="wrapper">
         <StepComponent />
      </div>
   );
}

export default CheckoutStep;
