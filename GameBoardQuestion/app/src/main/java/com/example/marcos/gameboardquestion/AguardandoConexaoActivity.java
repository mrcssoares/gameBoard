package com.example.marcos.gameboardquestion;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

public class AguardandoConexaoActivity extends AppCompatActivity {
    IPserver server = new IPserver();
    String nomeJogador="", nomeSala="", consulta="";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_aguardando_conexao);
        Intent intent = getIntent();
        nomeJogador = intent.getStringExtra("nomeJogador");
        nomeSala = intent.getStringExtra("nomeSala");

        final Timer timer = new Timer();

        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                aguardaConexao(nomeSala);
                if(consulta.contains("true")) {
                    mostraResponderPerguntas(nomeJogador, nomeSala);
                    timer.cancel();
                }
            }
        }, 1500, 1500);

    }

    public void mostraResponderPerguntas(String nomeJogador, String nomeSala){
        Intent intent = new Intent(this, ResponderPerguntaActivity.class);
        intent.putExtra("nomeJogador", nomeJogador);
        intent.putExtra("nomeSala", nomeSala);
        startActivity(intent);
    }

    public void aguardaConexao(final String nomeSala){
        new Thread(){
            public void run(){
                try {
                    postHttp(nomeSala);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }

    public void postHttp(String nomeSala) throws IOException {
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"startGame.php?sala="+nomeSala);
        final HttpResponse resposta = httpClient.execute(httpPost);

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    consulta = EntityUtils.toString(resposta.getEntity());

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

}
