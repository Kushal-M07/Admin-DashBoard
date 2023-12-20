import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function handleInfo (toastMessage) {
  toast.info(toastMessage)
}

function handleSuccess (toastMessage) {
  console.log('what are you doing bro')
  toast.success(toastMessage)
}

function handleError (toastMessage) {
  toast.error(toastMessage)
}
  const toastr = {
  handleSuccess,

  handleInfo,

  handleError
}
export default toastr