import { useKeycloak } from '@react-keycloak/web';

export default function AuthorizedFunction(roles) {
    const {keycloak, initialized} = useKeycloak();

    const isAuth = () => {
        if (keycloak && roles) {
            return roles.some(r => {
                const realm =  keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                return realm || resource;
            });
        }
        return false;
    };

    return isAuth();
}