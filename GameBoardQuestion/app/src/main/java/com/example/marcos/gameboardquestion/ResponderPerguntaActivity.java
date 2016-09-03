package com.example.marcos.gameboardquestion;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class ResponderPerguntaActivity extends AppCompatActivity {
    String nomeJogador="", nomeSala="", fase="", player="";
    Button verdadeiro, falso;
    IPserver server = new IPserver();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_responder_pergunta);
        Intent intent = getIntent();
        nomeJogador = intent.getStringExtra("nomeJogador");
        nomeSala = intent.getStringExtra("nomeSala");
        fase = intent.getStringExtra("fase");
        player = intent.getStringExtra("player");

        verdadeiro = (Button) findViewById(R.id.button_verdadeiro);
        falso = (Button) findViewById(R.id.button_falso);

        verdadeiro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }
        });

        falso.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }


        });
    }
    public void RegistrarSala(){
        new Thread(){
            public void run(){
                try {
                    postHttp(fase, player);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttp(String nome, String player) throws IOException {
        String entrada = nome;
        if (nome.contains(" ")) {
            entrada = entrada.replaceAll(" ", "_");
        }
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"responderPergunta.php?nome=" + entrada);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}