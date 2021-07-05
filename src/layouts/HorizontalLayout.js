// !Do not remove the Layout import
import Layout from '@layouts/HorizontalLayout'

const HorizontalLayout = props => <Layout {...props}>{props.children}</Layout>
// const HorizontalLayout = props => (
//     <Layout navbar='I am in navbar, Everything else is removed' {...props}>
//       {props.children}
//     </Layout>
//   )

export default HorizontalLayout
