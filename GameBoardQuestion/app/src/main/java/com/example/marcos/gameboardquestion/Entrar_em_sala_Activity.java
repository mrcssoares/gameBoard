package com.example.marcos.gameboardquestion;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.apache.http.*;

import java.io.IOException;

import static android.R.layout.simple_list_item_1;

public class  Entrar_em_sala_Activity extends AppCompatActivity {
    IPserver server = new IPserver();
    String[] salas = new String[100];
    String stringSalas = "";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_entrar_em_sala_);
        salas = new String[]{"Carregando..."};
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, salas);
        final ListView listView_salas = (ListView)findViewById(R.id.listView_lista_de_salas);
        listView_salas.setAdapter(adapter);
        ListaSala();
        listView_salas.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            @Override
            public void onItemClick(AdapterView<?> parent, View view,
                                    int position, long id) {

                // ListView Clicked item index
                int itemPosition     = position;

                // ListView Clicked item value
                String  itemValue    = (String) listView_salas.getItemAtPosition(position);
                mostrarEntrarEmSala2(itemValue);
                // Show Alert
                //Toast.makeText(getApplicationContext(),
                  //      "Position :"+itemPosition+"  ListItem : " +itemValue , Toast.LENGTH_SHORT)
                    //    .show();

            }


        });
    }

    public void mostrarEntrarEmSala2(String nomesala){
        Intent intent = new Intent(this, Entrar_Em_Sala2Activity.class);
        intent.putExtra("nomeSala", nomesala);
        startActivity(intent);
        finish();
    }

    public void ListaSala(){
        final ArrayAdapter<String> adapter;
        final ListView listView_salas = (ListView)findViewById(R.id.listView_lista_de_salas);
        new Thread(){
            public void run(){
                try {
                    postHttpListaSala();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
        adapter = new ArrayAdapter<String>(this, simple_list_item_1, salas);
        listView_salas.setAdapter(adapter);
    }
    public void postHttpListaSala() throws IOException {
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"listarSalas.php");
        final HttpResponse resposta = httpClient.execute(httpPost);
        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    stringSalas = EntityUtils.toString(resposta.getEntity());
                    salas = stringSalas.split(";");
                    listSalas(salas);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });

    }

    public void listSalas(String[] salas){
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, salas);
        final ListView listView_salas = (ListView)findViewById(R.id.listView_lista_de_salas);
        listView_salas.setAdapter(adapter);
    }

}
