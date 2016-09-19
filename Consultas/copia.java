package com.example.marcos.gameboardquestion;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

public class TabuleiroActivity extends AppCompatActivity {
    IPserver server = new IPserver();
    String vez ="";
    String nomeJogador="", nomeSala="", fase="", player="";//jogador
    String[] posicoes = new String[100];
    String respostas="";
    TextView faseJogador1, faseJogador2;
    String flag="";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tabuleiro);
        faseJogador1 = (TextView)findViewById(R.id.textView_fase_jogador1);
        faseJogador2 = (TextView)findViewById(R.id.textView_fase_jogador2);

        Intent intent = getIntent();
        nomeJogador = intent.getStringExtra("nomeJogador");
        Log.d("nomeJogador", nomeJogador);

        nomeSala = intent.getStringExtra("nomeSala");
        fase = intent.getStringExtra("fase");
        player = intent.getStringExtra("player");
        Log.d("player", player);
        verificaPosicoes();
        final Timer timer = new Timer();


        if(player.contains("1")) {
            Log.d("fase1: ",faseJogador1.getText().toString() );
                timer.scheduleAtFixedRate(new TimerTask() {
                    public void run() {
                        verificaVez();
                        if(flag.contains("true")){
                            timer.cancel();
                        }
                        if (vez.contains("1")) {
                            Log.d("false", "true");
                            timer.cancel();
                            mostrarResponderPerguntas();
                        }
                    }
                }, 1500, 1500);
        }else {
            Log.d("fase2: ",faseJogador1.getText().toString() );
                timer.scheduleAtFixedRate(new TimerTask() {
                    public void run() {
                        verificaVez();
                        if (vez.contains("2")) {
                            Log.d("false", "true");
                            timer.cancel();
                            mostrarResponderPerguntas();

                        }
                    }
                }, 1500, 1500);
        }
    }

    public void mostrarResponderPerguntas(){
        Intent intent = new Intent(this, ResponderPerguntaActivity.class);
        Log.d("sala2", "chamando tabuleirio");
        intent.putExtra("nomeJogador", nomeJogador);
        intent.putExtra("nomeSala", nomeSala);
        intent.putExtra("fase", fase);
        intent.putExtra("player", player);
        Log.d("nomeJogador", nomeJogador);
        startActivity(intent);
        finish();
    }

    public void verificaVez(){
        Log.d("RespPergunta", "ConsultandoFase");
        new Thread(){
            public void run(){
                try {
                    postHttpVez();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpVez() throws IOException {
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"verificaVez.php");

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());
        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    vez = EntityUtils.toString(resposta.getEntity());

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public void verificaPosicoes(){
        Log.d("RespPergunta", "ConsultandoFase");
        new Thread(){
            public void run(){
                try {
                    postHttpP();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpP() throws IOException {
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"verificaposicoes.php");

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());
        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    respostas = EntityUtils.toString(resposta.getEntity());
                    posicoes = respostas.split(";");
                    faseJogador1.setText("Jogador1: "+posicoes[0]);
                    faseJogador2.setText("Jogador2: "+posicoes[1]);
                    if(faseJogador1.getText().toString().contains("5") || (faseJogador2.getText().toString().contains("5"))){
                        Toast.makeText(getBaseContext(), "Você Venceu!!", Toast.LENGTH_LONG).show();
                        flag ="true";
                        finish();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
