import $ from 'jquery';
import moment from 'moment';
import './style/style.css';

$('#search-button').on('click',  () => {

    $.ajax({
        url:'https://api.binderbyte.com/v1/track?api_key=bac1ae570b7051e7312c9bec73bd19635babdbff164fe0c2b082b26e0e8fb980',
        type:'get',
        dataType:'json',

        data:{

            'courier':$('#courier_input').val(),
            'awb':$('#awb_input').val()

        },

        success: result => {
            if (result.status == 200){
                let resi = result.data;
                console.log(resi);
                $('#resi-status').html(`
                <div class="status">`+"STATUS PENGIRIMAN"+`</div>
                <div class="container">
                <table class="card-body">
                    <tbody>
                        <tr>
                            <td>Nomor Resi :</th>
                            <td>`+ resi.summary.awb +`</td>
                        </tr>
                        <tr>
                            <td>Jasa Pengiriman :</th>
                            <td>`+ resi.summary.courier +`</td>
                        </tr>
                        <tr>
                            <td>Jenis Servis :</th>
                            <td>`+ resi.summary.service +`</td>
                        </tr>
                        <tr>
                            <td>Status Pengiriman :</th>
                            <td>`+ resi.summary.status +`</td>
                        </tr>
                        <tr>
                            <td>Nama Pengirim :</th>
                            <td>`+ resi.detail.shipper +`</td>
                        </tr>
                        <tr>
                            <td>Alamat Pengirim :</th>
                            <td>`+ resi.detail.origin +`</td>
                        </tr>
                        <tr>
                            <td>Alamat Tujuan :</th>
                            <td>`+ resi.detail.destination +`</td>
                        </tr>
                        <tr>
                            <td>Nama Penerima :</th>
                            <td>`+ resi.detail.receiver +`</td>
                        </tr>
                        <tr>
                            <td>Tanggal Terima :</th>
                            <td>`+ resi.summary.date +`</td>
                        </tr>
                    </tbody>
                </table>

                </div>
                `);

                $.each(resi.history, (i, item) => {
                    $('#resi-history').append(`
                    <div class="card mb-4">
                        <div class="card-body">
                            <p>`+ item.date +`</p>
                            <p>`+ item.desc +`</p>
                            <p>`+ item.location +`</p>
                        </div>
                    </div>
                    `);

                })
                
            }else{
                $('#resi-result').html(`
                <h1>`+result.message+`</h1
                `)
            }
        }
    })
})

class TextCenter extends HTMLElement {
    connectedCallback (){
        this.innerHTML = `
        <h2 style="text-align:center; margin-left:120px;">Ayo Lihat Perjalanan Barangmu!!`;
    }
}

customElements.define('text-desc', TextCenter);