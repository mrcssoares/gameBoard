package com.example.marcos.gameboardquestion;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
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
        salas = new String[]{"sala 1", "sala 2", "sala 3"};
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, salas);
        final ListView listView_salas = (ListView)findViewById(R.id.listView_lista_de_salas);
        listView_salas.setAdapter(adapter);
        ListaSala();


    }
    //teste git
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


    public void RegistraJogadorSala(){
        new Thread(){
            public void run(){
                EditText edtTxtNomeSala = (EditText)findViewById(R.id.editText_nome_sala);
                EditText edtTxtNomeJogador = (EditText)findViewById(R.id.editText_nome_jogador);
                try {
                    postHttpJogador(edtTxtNomeSala.getText().toString(), edtTxtNomeJogador.getText().toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpJogador(String nome, String jogador) throws IOException {
        String entrada = nome;
        String entradaJogador = jogador;

        if (nome.contains(" ")) {
            entrada = entrada.replaceAll(" ", "_");
        }
        if (jogador.contains(" ")) {
            entradaJogador = entradaJogador.replaceAll(" ", "_");
        }

        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"entrarSala.php?nome=" + entradaJogador+"&sala="+entrada);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_LONG).show();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

}
