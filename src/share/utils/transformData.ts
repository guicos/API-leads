export class TransformData {
    constructor(){}
    async number(data: any){
        if(data?.Codigo) data.Codigo = parseInt(data?.Codigo);
        if(data?.Filial) data.Filial = data?.Filial == 1 ? true: false;
        if(data?.NumeroFilial) data.NumeroFilial = parseInt(data?.NumeroFilial);

        return data
    }

    async calculator(data: any, number: string){
       return data.filter((element: any) => element.empresa.numero_funcionarios >= number);
    }
}