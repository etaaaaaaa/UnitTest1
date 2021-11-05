export default function getHealth(status) {
    if (status.health < 15)  {return 'critical'}
    if (status.health < 50) {return 'wounded'}
    return 'healthy'
}