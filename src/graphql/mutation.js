import { gql } from "@apollo/client";

export const SAVE_PHONE = gql`
    mutation savePhone($companyId:Int!,$locationId:Int!,$phone:String!){
        savePhone(companyId:$companyId,locationId:$locationId,phone:$phone){
            statusCode,
            message
        }
    }
`;
